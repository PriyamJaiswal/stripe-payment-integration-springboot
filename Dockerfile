FROM eclipse-temurin:21
WORKDIR /app

# Copies the pre-built JAR from the GitHub runner's target folder
COPY target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]