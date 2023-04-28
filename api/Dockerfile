# FROM maven:3.8.3-openjdk-17-slim AS build

# COPY portfolio/pom.xml /app/
# WORKDIR /app
# RUN mvn dependency:go-offline

# COPY portfolio/src /app/src/
# RUN mvn clean install

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY portfolio/target/portfolio-0.0.1-SNAPSHOT.jar /app/myapp.jar

EXPOSE 8080

CMD ["java", "-jar", "myapp.jar"]
