package dev.nazna.examplespringmodulith.syllable.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/syllable")
class SyllableController {

    companion object {
        private const val CURRENT_VERSION = 1
    }

    @GetMapping("{id}")
    fun find(@PathVariable id: String): String {
        return "Hello~, $id on $CURRENT_VERSION"
    }
}
