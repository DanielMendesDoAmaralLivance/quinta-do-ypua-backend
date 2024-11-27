CREATE TABLE "User" (
	"id" serial PRIMARY KEY,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"password" text NOT NULL,
	"active" boolean NOT NULL DEFAULT true,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE "Accommodation" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL UNIQUE,
	"description" text NOT NULL,
	"pricePerNight" DECIMAL(10, 2) NOT NULL,
	"checkin" time NOT NULL,
	"checkout" time NOT NULL,
	"guests" integer NOT NULL,
	"beds" integer NOT NULL,
	"minNights" integer NOT NULL,
	"active" boolean NOT NULL DEFAULT true,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE "AccommodationReservationStatus" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL UNIQUE,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now()
);
INSERT INTO "AccommodationReservationStatus" ("name") VALUES ('Confirmed', 'Waiting checkin', 'In progress', 'Waiting checkout', 'Cancelled', 'Finished');
CREATE TABLE "Guest" (
	"id" serial PRIMARY KEY,
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"email" text NOT NULL UNIQUE,
	"document" text NOT NULL UNIQUE,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE "AccommodationReservation" (
	"id" serial PRIMARY KEY,
	"guests" integer NOT NULL,
	"predictedStartAt" timestamptz NOT NULL,
	"predictedEndAt" timestamptz NOT NULL,
	"startedAt" timestamptz NULL,
	"endedAt" timestamptz NULL,
	"totalPrice" DECIMAL(10, 2) NOT NULL,
	"includedLunch" boolean NOT NULL,
	"includedDinner" boolean NOT NULL,
	"accommodationId" integer NOT NULL,
	"accommodationReservationStatusId" integer NOT NULL,
	"resposibleGuestId" integer NOT NULL,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now(),
	FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON UPDATE restrict ON DELETE restrict,
	FOREIGN KEY ("accommodationReservationStatusId") REFERENCES "AccommodationReservationStatus"("id") ON UPDATE restrict ON DELETE restrict,
	FOREIGN KEY ("resposibleGuestId") REFERENCES "Guest"("id") ON UPDATE restrict ON DELETE restrict
);
CREATE TABLE "Amenity" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL UNIQUE,
	"iconUrl" text NOT NULL UNIQUE,
	"active" boolean NOT NULL DEFAULT true,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE "AccommodationAmenity" (
	"id" serial PRIMARY KEY,
	"name" text NOT NULL UNIQUE,
	"accommodationId" integer NOT NULL,
	"amenityId" integer NOT NULL,
	"active" boolean NOT NULL DEFAULT true,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now(),
	FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON UPDATE restrict ON DELETE restrict,
	FOREIGN KEY ("amenityId") REFERENCES "Amenity"("id") ON UPDATE restrict ON DELETE restrict
);
CREATE TABLE "AccommodationImage" (
	"id" serial PRIMARY KEY,
	"label" text NULL,
	"fileUrl" text NOT NULL UNIQUE,
	"accommodationId" integer NOT NULL,
	"active" boolean NOT NULL DEFAULT true,
	"createdAt" timestamptz NOT NULL DEFAULT now(),
	"updatedAt" timestamptz NOT NULL DEFAULT now(),
	FOREIGN KEY ("accommodationId") REFERENCES "Accommodation"("id") ON UPDATE restrict ON DELETE restrict
);