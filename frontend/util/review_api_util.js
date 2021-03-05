export const fetchReviews = () => {
    return $.ajax({
        method: "GET",
        url: "/api/reviews"
    });
}

export const createReview = (body) => {
    return $.ajax({
        method: "POST",
        url: `/api/users/${body.author_id}/reviews`,
        data: { review: body },
        contentType: false,
        processData: false
    });
}


export const deleteReview = (id) => {
    return $.ajax({
        method: "DELETE",
        url: `/api/reviews/${id}`
    });
}