const url = "https://www.dnd5eapi.co/api";

export async function racesApi() {
    const response = await fetch(url+"/races");
    const data = await response.json();
        return data.results;
}

export async function spellsApi() {
    const response = await fetch(url+"/spells");
    const data = await response.json();
        return data.results;
}

export async function specificSpellsApi(spell){
    const response = await fetch(url+'/spells/'+spell);
    const data = await response.json();
        return data;
}