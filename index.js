exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };

    console.log("Hello Lambda Deploy!")

    return "Hello Lambda Deploy";
};
