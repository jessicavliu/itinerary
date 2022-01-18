CREATE TABLE locations(
    location_id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR (200) NOT NULL,
    rating DECIMAL,
    description VARCHAR(400),
    lat DECIMAL,
    lng DECIMAL,
    date_created TIMESTAMP DEFAULT current_timestamp,
    date_modified TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE itineraries(
    itinerary_id serial PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(400),
    date_created TIMESTAMP DEFAULT current_timestamp,
    date_modified TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE itinerary_locations(
    PRIMARY KEY(itinerary_id, location_id),
    FOREIGN KEY(itinerary_id)
        REFERENCES itineraries(itinerary_id),
    FOREIGN KEY(location_id)
        REFERENCES location(location_id),
    ordering_index INT NOT NULL CHECK(ordering_id >= 0)
);