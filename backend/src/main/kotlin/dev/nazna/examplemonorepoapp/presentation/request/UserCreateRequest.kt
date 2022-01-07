package dev.nazna.examplemonorepoapp.presentation.request

import kotlinx.serialization.Serializable

@Serializable
data class UserCreateRequest(val name: String)
