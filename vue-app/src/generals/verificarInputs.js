export function verificarEmail(email) {
	// Expressão regular para validar o formato
	const re =
		/^(?!.*\.\.)(?!.*\.$)(?!^\.)[a-zA-Z0-9._%+-]+(?<!\.)@[a-zA-Z0-9.-]+(?<!\.)\.[a-zA-Z]{2,}$/;

	if (!re.test(String(email).toLowerCase())) {
		return false; //email não é válido
	}

	// Verifica se contém apenas um "@" e se o domínio é plausível
	const parts = email.split("@");
	if (parts.length !== 2) {
		return false;
	}

	const domainParts = parts[1].split(".");
	if (domainParts.length < 2) {
		return false;
	}

	// Verifica se cada parte do domínio é válida
	for (const part of domainParts) {
		if (part.length === 0) {
			return false;
		}
	}

	return true; //email é válido
}

export function verificarUrl(url) {
	const re =
		/^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
	return re.test(String(url).toLowerCase());
}
