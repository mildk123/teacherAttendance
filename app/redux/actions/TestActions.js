const fireModal = (payload) => {
    return {
        type: "TEST_CASE",
        payload : payload
    }
}

export {
    fireModal,
    storeToken,
    createUser,
    updateUser
}