import axios from "axios";

const apiKey = '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'
const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'

const GTP3Service = {
    async getGTP3Response(prompt) {
        try { 
            const response = await axios.post(apiUrl, {
                prompt: prompt,
                max_totens:100
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'content-type': 'application/json'
                }
            }); 
            return response.data.choices[0].text;
        } catch (error) {
            console.error('Erro ao fazer solicitações para o chat', error);
            throw error;
        }
    }
}

export default GTP3Service;