package com.portfolio.portfolio

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestParam


@SpringBootApplication
class PortfolioApplication

fun main(args: Array<String>) {
	runApplication<PortfolioApplication>(*args)
}

@CrossOrigin(origins = ["http://103.2.115.18:3000"])

@RestController
class MessageController(val jdbcTemplate: JdbcTemplate) {
//	@GetMapping("/message")
//	fun getMessage(): String? {
//		return jdbcTemplate.queryForObject("SELECT text FROM message WHERE id = 1", String::class.java)
//	}

	@GetMapping("/message")
	fun getMessage(@RequestParam id: Long): ResponseEntity<String> {
		val result = jdbcTemplate.queryForObject("SELECT text FROM message WHERE id = ?", arrayOf<Any>(id), String::class.java)
		return if (result != null) {
			ResponseEntity.ok(result)
		} else {
			ResponseEntity.notFound().build()
		}
	}

//	@CrossOrigin(origins = ["http://localhost:3000"])
	@GetMapping("/about")
	fun getAllMessages(): ResponseEntity<List<String>> {
		val result = jdbcTemplate.queryForList("SELECT text FROM message", String::class.java)
		return if (result.isNotEmpty()) {
			ResponseEntity.ok(result)
		} else {
			ResponseEntity.notFound().build()
		}
	}

	@GetMapping("/hello")
	fun hello(): String {
		return "hello"
	}
}
