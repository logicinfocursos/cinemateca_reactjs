import { api } from './api'


export const apiGET = async ({code, page}) => {

   try {

        let uri = (code ? code : '/popular') + '?api_key=' + process.env.REACT_APP_API_KEY + '&language=' + process.env.REACT_APP_LANGUAGE
        uri += code ? '' : '&page=' + page

        console.log(">>> uri", uri)
        const teste = process.env.REACT_APP_API_BASEURL + uri
        console.log(">>> teste", teste)
        const result = await api.get(uri)
        console.log(">>> result: ", result)

        const result2 = code ? result.data : result.data.results


        return result2

   } catch (error) {

      //  console.log("erro ao tentar ler a api:", error)

      //  return null
    }
}