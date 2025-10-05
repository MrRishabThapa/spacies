import requests

BASE = "https://genelab-data.ndc.nasa.gov/genelab/data/search"

def fetch_organisms(limit=100):
    
    params = {"ffield": "Organism", "size": limit}
    resp = requests.get(BASE, params=params).json()
    hits = resp.get("hits", {}).get("hits", [])

    results = []
    for h in hits:
        src = h.get("_source", {})
        organism = src.get("organism", src.get("Organism", "")) 

        if isinstance(organism, str):
            organism = [organism]

 
        for org in organism:
            if org.strip():
                results.append({
                    "organism": org,
                    "accession": src.get("Accession", "Unknown"),
                    "title": src.get("Study Title", "Unknown"),
                    "lab": src.get("Managing NASA Center", "Unknown"),
                })

    return results

def get_total_publications(publications):
    total_publications = len(publications)
    return total_publications

def get_species_count(publications):
    count = 0
    for organism in publications:
        if organism:
            count += 1
    return count


def get_knowlede_gaps():
    '''Get the Knowledge gaps using the logic'''

