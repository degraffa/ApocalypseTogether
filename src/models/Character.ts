import mongoose from "mongoose";
import { List } from "lodash";

export type CharacterDocument = mongoose.Document & {
    // background stuff
    background: {
        characterName: string;
        characterAge: string;
        species: string; // TODO: add species 
        trait1: string; // TODO: add traits
        trait2: string;
    };

    // health stats
    healthStats: {
        // total
        currentHP: number;
        maxHP: number;

        // limbs
        currentHeadHP: number;
        maxHeadHP: number;
        currentTorsoHP: number;
        maxTorsoHP: number;
        currentLeftArmHP: number;
        maxLeftArmHP: number;
        currentRightArmHP: number;
        maxRightArmHP: number;
        currentLeftLegHP: number;
        maxLeftLegHP: number;
        currentRightLegHP: number;
        maxRightLegHP: number;
        
        // radiation level
        currentRadiation: number;
        maxRadiation: number;
    };
    

    // damage resistances/threshold
    combatStats: {
        // damage threshold, damage <= the damage threshold is ignored
        damageThreshold: number;

        // resistances
        damageResistance: number;
        fireResistance: number;
        radiationResistance: number;
        poisonResistance: number;
        energyResistance: number;
        electricalResistance: number;

        // combat sequence, the higher the number the higher you are in turn order
        sequence: number;
    };

    // special stats
    specialStats: {
        specialStrength: number;
        specialPerception: number;
        specialEndurance: number;
        specialCharisma: number;
        specialIntelligence: number;
        specialAgility: number;
        specialLuck: number;
    };

    // skills
    skillStats: {
        skillSmallGuns: number;
        skillBigGuns: number;
        skillEnergyWeapons: number;
        skillUnarmed: number;
        skillMeleeWeapons: number;
        skillThorwing: number;
        skillFirstAid: number;
        skillDoctor: number;
        skillSneak: number;
        skillLockpick: number;
        skillSteal: number;
        skillExplosives: number;
        skillScience: number;
        skillrepair: number;
        skillPiloting: number;
        skillAwareness: number;
        skillSpeech: number;
        skillBarter: number;
        skillGambling: number;
        skillOutdoorsman: number;
        skillEvade: number;
    };

    // equipment
    equipment: {
        equippedArmor: string; // TODO: Add armor
        equippedWeapon: string; // TODO: Add weapons

        currentItemSlots: number;
        maxItemSlots: number;
        heldItems: string[]; // TODO: make equipment class
        storedItems: string[];
    };
};

const characterSchema = new mongoose.Schema({
    // background stuff
    background: {
        characterName: String,
        characterAge: String,
        species: String, // TODO: add species 
        trait1: String, // TODO: add traits
        trait2: String,
    },

    // health stats
    healthStats: {
        // total
        currentHP: Number,
        maxHP: Number,

        // limbs
        currentHeadHP: Number,
        maxHeadHP: Number,
        currentTorsoHP: Number,
        maxTorsoHP: Number,
        currentLeftArmHP: Number,
        maxLeftArmHP: Number,
        currentRightArmHP: Number,
        maxRightArmHP: Number,
        currentLeftLegHP: Number,
        maxLeftLegHP: Number,
        currentRightLegHP: Number,
        maxRightLegHP: Number,
        
        // radiation level
        currentRadiation: Number,
        maxRadiation: Number,
    },
    

    // damage resistances/threshold
    combatStats: {
        // damage threshold, damage <= the damage threshold is ignored
        damageThreshold: Number,

        // resistances
        damageResistance: Number,
        fireResistance: Number,
        radiationResistance: Number,
        poisonResistance: Number,
        energyResistance: Number,
        electricalResistance: Number,

        // combat sequence, the higher the Number the higher you are in turn order
        sequence: Number,
    },

    // special stats
    specialStats: {
        specialStrength: Number,
        specialPerception: Number,
        specialEndurance: Number,
        specialCharisma: Number,
        specialIntelligence: Number,
        specialAgility: Number,
        specialLuck: Number,
    },

    // skills
    skillStats: {
        skillSmallGuns: Number,
        skillBigGuns: Number,
        skillEnergyWeapons: Number,
        skillUnarmed: Number,
        skillMeleeWeapons: Number,
        skillThorwing: Number,
        skillFirstAid: Number,
        skillDoctor: Number,
        skillSneak: Number,
        skillLockpick: Number,
        skillSteal: Number,
        skillExplosives: Number,
        skillScience: Number,
        skillrepair: Number,
        skillPiloting: Number,
        skillAwareness: Number,
        skillSpeech: Number,
        skillBarter: Number,
        skillGambling: Number,
        skillOutdoorsman: Number,
        skillEvade: Number,
    },

    // equipment
    equipment: {
        equippedArmor: String, // TODO: Add armor
        equippedWeapon: String, // TODO: Add weapons

        currentItemSlots: Number,
        maxItemSlots: Number,
        heldItems: Array, // TODO: make equipment class
        storedItems: Array,
    }
}, {timestamps: false});

export const Character = mongoose.model<CharacterDocument>("Character", characterSchema);