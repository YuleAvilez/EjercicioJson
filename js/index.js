console.log("conectado")

const llamarJson = async() =>{
    try{
        const respuesta = await fetch("familia.json")
        const resultado = await respuesta.json()

        console.log(resultado.myArray)
        listarFamilias(resultado.myArray)
    }catch(error){
        return error
    }
}

llamarJson()

const listarFamilias = (familia) => {
    familia.forEach(DatosdeFamilia => {
        const { familiar, nombre, edad, cumpleaños, estadocivil} = DatosdeFamilia;
        const listadoFamilias = document.querySelector('#myTable')
        if (listadoFamilias){
            listadoFamilias.innerHTML +=`
            <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-gray-600 font-bold"> ${familiar} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                    <p class="text-gray-600">${nombre}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                    <p class="text-gray-600">${edad}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                    <p class="text-gray-600">${cumpleaños}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-600">    
                    <p class="text-gray-600">${estadocivil}</p>
                </td>
            </tr>


            `
        }
    });
}