import { Request, Response } from "express";

/**
 * GET /
 * Characters page page.
 */
export const viewCharacters = (req: Request, res: Response) => {
    res.render("characters/characters", {
        title: "Characters"
    });
};

