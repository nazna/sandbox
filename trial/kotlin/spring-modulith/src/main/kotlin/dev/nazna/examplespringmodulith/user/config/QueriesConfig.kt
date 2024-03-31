package dev.nazna.examplespringmodulith.user.config

import dev.nazna.examplespringmodulith.user.repository.Queries
import dev.nazna.examplespringmodulith.user.repository.QueriesImpl
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import javax.sql.DataSource

@Configuration
class QueriesConfig(private val dataSource: DataSource) {

    @Bean
    fun queries(): Queries {
        return QueriesImpl(dataSource.connection)
    }
}
