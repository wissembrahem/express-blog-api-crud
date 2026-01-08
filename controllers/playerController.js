import asromaPlayers from "../data.js";
export const index = (req,res) => {
    res.json({
        count: asromaPlayers.length,
        result : asromaPlayers
    });
}

export const show = (req, res) => {
    const id = parseInt(req.params.id);
    const player = asromaPlayers.find(p => p.id === id);
    res.json(player);
}

export const destroy = (req, res) => {
    const id = parseInt(req.params.id);

    const index = asromaPlayers.findIndex(p => p.id === id);
    if (index === -1) {
        return res.status(404).json({ error:"Players not found"});
    }
    asromaPlayers.splice(index, 1);
    console.log(asromaPlayers);

    res.status(204).send();
}

export const store = (req,res) => {
    console.log("Body arrivato:", req.body);
    const newPlayer = req.body;

    const lastId = asromaPlayers.length
    ? asromaPlayers[asromaPlayers.length - 1].id
    : 0;
    newPlayer.id = lastId + 1;
    asromaPlayers.push(newPlayer);
    res.status(201).json(newPlayer);
};

export const update = (req, res) => {
    const id = parseInt(req.params.id);

    const index = asromaPlayers.findIndex((p) => p.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Players not found"});
    }
    const updatePlayer = { ...req.body, id };

    asromaPlayers[index] = updatePlayer;

    console.log("PUT UPDATE:", updatePlayer);
    return res.status(200).json(updatePlayer);
};

export const modify = (req, res) => {
    const id = parseInt(req.params.id);

    const player = asromaPlayers.find((p) => p.id === id);

    if (!player) {
        return res.status(404).json({ error: "players not found" });
    }
    Object.assign(player, req.body);
    console.log("patch modify:", player);
    return res.status(200).json(player);
};