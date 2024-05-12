import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Fonction spécifique pour le seeding du modèle POI
async function seedPOI(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for POI...`);

    for (const item of data) {
        await prisma.pOI.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for POI.`);
}

// Fonction spécifique pour le seeding du modèle Boutique
async function seedBoutique(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for Boutique...`);

    for (const item of data) {
        await prisma.boutique.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for Boutique.`);
}

// Fonction spécifique pour le seeding du modèle ParkingSite
async function seedParkingSite(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for ParkingSite...`);

    for (const item of data) {
        await prisma.parkingSite.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for ParkingSite.`);
}

// Fonction spécifique pour le seeding du modèle PointOfInterest
async function seedPointOfInterest(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for PointOfInterest...`);

    for (const item of data) {
        await prisma.spectacle.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for PointOfInterest.`);
}

// Fonction spécifique pour le seeding du modèle Project
async function seedProject(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for Project...`);

    for (const item of data) {
        await prisma.spectateur.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for Project.`);
}

// Fonction spécifique pour le seeding du modèle Venue
async function seedVenue(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for Venue...`);

    for (const item of data) {
        await prisma.siteCompet.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for Venue.`);
}

// Fonction principale orchestrant le seeding
async function main() {
    try {
        await seedPOI("./data/POI.json");
        await seedBoutique("./data/Boutique.json");
        await seedParkingSite("./data/ParkingSite.json");
        await seedPointOfInterest("./data/Spectacle.json");
        await seedProject("./data/Spectateur.json");
        await seedVenue("./data/SiteCompet.json");
    } finally {
        await prisma.$disconnect();
    }
}

// Exécuter le script de seeding et gérer les erreurs
main().catch(e => {
    console.error(e);
    process.exit(1);
});
