const express = require('express');
const router = new express.Router();
const userdetail = require("../model/user");


router.get('/', async (req, res) => {
    try {
        const getUserInfo = await userdetail.find({});
        await res.status(200).send(getUserInfo);
    } catch (error) {
        console.log("Error: ", error);
    }
})


router.get('/:id', async (req, res) => {
    try {
        // const _id = req.params.id;
        const getUserInfoById = await userdetail.findById(req.params.id);
        await res.status(200).send(getUserInfoById);
        console.log(getUserInfoById);
    } catch (error) {
        console.log("Error: ", error);
        await req.status(404).send(error);
    }
})

router.post('/user', async (req, res) => {
    try {
        const saveUserInfo = new userdetail({
            name: req.body.name,
            email: req.body.email,
        });
        console.log("Save user: ", saveUserInfo);
        const insertUser = await saveUserInfo.save();
        console.log(insertUser);
        res.status(201).send(insertUser);
    } catch (error) {
        res.status(400).send("error : ", error);
    }
});

router.patch("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateUser = await userdetail.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        await res.status(200).send(updateUser);
    } catch (error) {
        console.log("Update Error: ", error);
        await res.status(404).send(error);
    }
})

router.delete("/user/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteUser = await userdetail.findByIdAndDelete(_id);
        await res.status(200).send(deleteUser);
    } catch (error) {
        console.log("Update Error: ", error);
        await res.status(404).send(error);
    }
})

module.exports = router;