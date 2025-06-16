export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    };
    location: {
        name: string;
    };
    image: string;
}

// Interface optionnelle pour la réponse de l'API qui contient la pagination
export interface CharacterResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[];
}