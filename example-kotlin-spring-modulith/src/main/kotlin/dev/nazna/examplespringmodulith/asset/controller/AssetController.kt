package dev.nazna.examplespringmodulith.asset.controller

import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/asset")
class AssetController {

    @PostMapping("/user/{id}/profile")
    fun postUserProfile(@PathVariable id: String) {
    }

    @DeleteMapping("/user/{id}/profile")
    fun deleteUserProfile(@PathVariable id: String) {
    }

    @PostMapping("/user/{id}/header")
    fun postUserHeader(@PathVariable id: String) {
    }

    @DeleteMapping("/user/{id}/header")
    fun deleteUserHeader(@PathVariable id: String) {
    }
}
