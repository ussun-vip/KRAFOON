exports.handler = async (event, context) => {
    switch (event.httpMethod) {
        case "GET":
            if (!event.queryStringParameters.x) { return { statusCode: 400, body: "400 Bad Request", } }
            let Xs = [
                "0.0.1"
            ];
            return {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET"
                },
                body: JSON.stringify({
                    x: (() => {
                        try {
                            return Xs.includes(atob(atob(event.queryStringParameters.x)))
                        } catch { return false }
                    })()
                }),
            };
            break;
        default:
            return {
                statusCode: 405,
                body: "405 Method Not Allowed",
            };
            break;
    }
};
