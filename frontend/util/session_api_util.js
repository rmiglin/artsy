export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user }
    })
);

export const logout = () => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
}

export const demoUser = () => {
    return $.ajax({
        method: 'POST',
        url: '/api/session',
        data: {
            user: {
                email: 'demouser@email.com',
                first_name: 'demo',
                password: 'hunter12'
            }
        }
    });
}