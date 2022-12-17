package dev.nazna.examplespringmodulith.search.controller

data class SearchRequestUser(
    val query: String,
    val sort: String,
    val order: String,
    val offset: Int,
    val limit: Int
)
