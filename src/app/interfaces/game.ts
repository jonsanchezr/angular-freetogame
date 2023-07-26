interface Screenshot {
    id: number;
    image: string;
}

interface MinimumSystemRequirements {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}

export interface Game {
    id: number;
    title: string;
    short_description: string;
    description?: string;
    developer: string;
    freetogame_profile_url: string;
    game_url: string;
    genre: string;
    minimum_system_requirements?: MinimumSystemRequirements;
    platform: string;
    publisher: string;
    release_date: string;
    screenshots?: Screenshot[];
    status?: string;
    thumbnail: string;
}
