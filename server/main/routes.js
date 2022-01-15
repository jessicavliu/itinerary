var express = require('express')
var router = express.Router()
var pool = require('./db')

/*
	LOCATION ROUTES SECTION
*/

router.get('/locations', (req, res, next) => {
	pool.query(`SELECT * FROM locations`,
		(q_err, q_res) => {
			res.json(q_res.rows)
		})
});

router.get('/locations', (req, res, next) => {
	const location_id = req.query.location_id

	pool.query(`SELECT * FROM locations WHERE location_id=$1`, [location_id], 
		(q_err, q_res) => {
			res.json(q_res.rows)
		})
});

router.post('/locations', (req, res, next) => {
	values = [
		req.body.name,
		req.body.address,
		req.body.description,
		req.body.lat,
		req.body.lng
	];

	pool.query(`INSERT INTO locations(name, address, description, lat, lng) VALUES ($1, $2, $3, $4, $5)`,
		values,
		(q_err, q_res) => {
			console.log(q_err)
			if(q_err) next(q_err)
			res.json(q_res.rows);
		}
	)
});

router.put('/locations', (req, res, next) => {
	values = [
		req.body.address,
		req.body.description,
		req.body.lat,
		req.body.lng,
		req.body.id
	];

	pool.query(
		`UPDATE locations SET address=$1, description=$2, lat=$3, lng=$4 WHERE location_id=$5`, 
		values,
		(q_err, q_res) => {
			res.json(q_res.rows);
		}
	)
})

router.delete('/locations', (req, res, next) => {
	location_id = req.body.location_id;
	pool.query(
		`DELETE FROM locations where location_id = $1`, 
		[location_id],
		(q_err, q_res) => {
			res.json(q_res.rows)
		}
	)
})

/*
	ITINERARIES ROUTES SECTION
*/

router.get('/itineraries', (req, res, next) => {
	pool.query(`SELECT * FROM itineraries`,
		(q_err, q_res) => {
			res.json(q_res.rows)
		})
});

router.get('/itineraries', (req, res, next) => {
	const itinerary_id = req.query.itinerary_id

	pool.query(`SELECT * FROM itineraries WHERE itinerary_id=$1`, [itinerary_id], 
		(q_err, q_res) => {
			res.json(q_res.rows)
		})
});

router.post('/itineraries', (req, res, next) => {
	values = [
		req.body.name,
		req.body.description
	];

	pool.query(`INSERT INTO itineraries(name, description) VALUES ($1, $2)`,
		values,
		(q_err, q_res) => {
			if(q_err) next(q_err)
			res.json(q_res.rows);
		}
	)
});

router.put('/itineraries', (req, res, next) => {
	values = [
		req.name, 
		req.description,
		req.itinerary_id
	];

	pool.query(
		`UPDATE itineraries SET name=$1, description=$2 WHERE itinerary_id=$3`,
		values,
		(q_err, q_res) => {
			res.json(q_res.rows)
		}
	)
})

router.delete('/itineraries', (req, res, next) => {
	itinerary_id = req.query.itinerary_id;
	pool.query(
		`DELETE FROM locations where location_id = $1`, 
		[itinerary_id],
		(q_err, q_res) => {
			res.json(q_res.rows)
		}
	)
})

module.exports = router