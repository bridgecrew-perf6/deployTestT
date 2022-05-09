package Teste.configuration;

import org.springdoc.core.customizers.OpenApiCustomiser;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;



	@Configuration
	public class SwaggerConfig {

		@Bean
		public OpenAPI springBlogPessoalOpenAPI() {
			return new OpenAPI()
					.info(new Info()
						.title("teste")
						.description("teste")
						.version("v1.0.0")
					.license(new License()
						.name("")
						.url(""))
					.contact(new Contact()
						.name("")
						.url("")
						.email("")))
					.externalDocs(new ExternalDocumentation()
						.description("")
						.url(""));

			
		}
		
		@Bean
		public OpenApiCustomiser customerGlobalHeaderOpenApiCustomiser() {

			return openApi -> {
				openApi.getPaths().values().forEach(pathItem -> pathItem.readOperations().forEach(operation -> {

					ApiResponses apiResponses = operation.getResponses();

					apiResponses.addApiResponse("200", createApiResponse("Sucesso!"));
					apiResponses.addApiResponse("201", createApiResponse("Objeto Persistido!"));
					apiResponses.addApiResponse("204", createApiResponse("Objeto Excluido!"));
					apiResponses.addApiResponse("400", createApiResponse("Erro na Requisi��o!"));
					apiResponses.addApiResponse("401", createApiResponse("Acesso N�o Autorizado!"));
					apiResponses.addApiResponse("404", createApiResponse("Objeto N�o Encontrado!"));
					apiResponses.addApiResponse("500", createApiResponse("Erro na Aplica��o!"));

				}));
			};
		}

		private ApiResponse createApiResponse(String message) {

			return new ApiResponse().description(message);

		}

		
		
	}