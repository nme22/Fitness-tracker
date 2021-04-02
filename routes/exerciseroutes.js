const express = require("express");
const db = require("../models");
const Workout = db.Workout

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find({}).then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    })
    app.put("/api/workouts/:id", function (req, res) {
        console.log(" PARAMS ID", req.params.id)
        /*  Workout.findOne({
             _id: req.params.id
         }, function (err, workout) {
             console.log("Workout object -->", workout)
             workout.exercises.push(req.body)

             Workout.updateOne({
                 _id: req.params.id
             }, workout, function (err, data) {
                 if (err) throw err
                 res.json(data)
             })
         }) */

        Workout.updateOne({
            _id: req.params.id
        }, workout, (err, data) => {
            console.log('UPDATE response => ', data)
            if (err) {
                console.log(err)
            }

            res.json(data)
        })


    });

    app.post("/api/workouts", async (req, res) => {
        console.log("From Workouts -->", req.body)

        const newWorkout = await new Workout(req.body)
        newWorkout.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.json(newWorkout)
        })


        /*    Workout.create(req.body, function (err, data) {
               if (err) return console.log(err);
               // saved!
               res.json(data)
             }); */

    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
    });
}