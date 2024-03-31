package dev.nazna.examplespringmodulith.search.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/search")
class SearchController {

    companion object {
        private const val CURRENT_VERSION = 1
    }

    @GetMapping("/v$CURRENT_VERSION/article")
    fun article(param: SearchRequestArticle): String {
        return "Hello~, $param on $CURRENT_VERSION"
    }

    @GetMapping("/v$CURRENT_VERSION/user")
    fun user(param: SearchRequestUser): String {
        return "Hello~, $param on $CURRENT_VERSION"
    }
}
