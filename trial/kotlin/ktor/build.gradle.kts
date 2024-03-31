val kotlinVersion: String by project
val ktorVersion: String by project
val koinVersion: String by project
val logbackVersion: String by project

group = "dev.nazna"
version = "0.0.1"

application {
  mainClass.set("dev.nazna.ApplicationKt")
}

plugins {
  application
  kotlin("jvm") version "1.5.21"
  kotlin("plugin.serialization") version "1.5.21"
  id("org.jlleitschuh.gradle.ktlint") version "10.1.0"
}

repositories {
  mavenCentral()
}

dependencies {
  implementation("io.ktor:ktor-server-core:$ktorVersion")
  implementation("io.ktor:ktor-server-netty:$ktorVersion")
  implementation("io.ktor:ktor-locations:$ktorVersion")
  implementation("io.ktor:ktor-serialization:$ktorVersion")
  implementation("io.insert-koin:koin-ktor:$koinVersion")
  implementation("io.insert-koin:koin-logger-slf4j:$koinVersion")
  implementation("ch.qos.logback:logback-classic:$logbackVersion")
  testImplementation("io.ktor:ktor-server-tests:$ktorVersion")
  testImplementation("org.jetbrains.kotlin:kotlin-test:$kotlinVersion")
}
