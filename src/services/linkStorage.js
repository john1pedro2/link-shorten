

export async function getLinksSaved(key){
    const myLinks = await localStorage.getItem(key);

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

export async function saveLink(key, newLink){
    let linksStored = await getLinksSaved(key);

    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('Esse link já existe na lista!')
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!')
      
}