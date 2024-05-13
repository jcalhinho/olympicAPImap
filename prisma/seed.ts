import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

// Fonction spécifique pour le seeding du modèle POI
async function seedpoi(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for POI...`);

    for (const item of data) {
        await prisma.poi.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for POI.`);
}

// Fonction spécifique pour le seeding du modèle Boutique
async function seedboutique(dataPath: string) {
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
async function seedparkingvelo(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for ParkingSite...`);

    for (const item of data) {
        await prisma.parkingvelo.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for ParkingSite.`);
}

// Fonction spécifique pour le seeding du modèle PointOfInterest
async function seedspectacle(dataPath: string) {
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
async function seedspectateur(dataPath: string) {
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
async function seedsitecompet(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for Venue...`);

    for (const item of data) {
        await prisma.sitecompet.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for Venue.`);
}
async function seedevent(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for Venue...`);

    for (const item of data) {
        await prisma.event.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for Venue.`);
}
async function seedflamme(dataPath: string) {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    console.log(`Seeding data for Venue...`);

    for (const item of data) {
        await prisma.flamme.create({
            data: item
        });
    }

    console.log(`Seeded ${data.length} items for Venue.`);
}

// Fonction principale orchestrant le seeding
async function main() {
    try {
        // await seedpoi("./data/POI.json");
        // await seedboutique("./data/Boutique.json");
        // await seedparkingvelo("./data/ParkingSite.json");
        // await seedspectacle("./data/Spectacle.json");
        // await seedspectateur("./data/Spectateur.json");
        // await seedsitecompet("./data/SiteCompet.json");
        await seedflamme("./data/flamme.json");
       //await seedevent("./data/event.json");
    } finally {
        await prisma.$disconnect();
    }
}

// Exécuter le script de seeding et gérer les erreurs
main().catch(e => {
    console.error(e);
    process.exit(1);
});
