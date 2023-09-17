FROM openjdk:20-ea-4-jdk

WORKDIR /app

COPY target/dfwdictionary-0.0.1-SNAPSHOT.jar /app/springboot-restful-webservices.jar

ENTRYPOINT ["java", "-jar", "springboot-restful-webservices.jar"]