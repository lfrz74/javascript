-- DROP TABLE public.fotografias;

CREATE TABLE public.fotografias
(
    id serial NOT NULL,
    fotografia character varying(200) COLLATE pg_catalog."default" NOT NULL,
    descripcion character varying(250) COLLATE pg_catalog."default",
    imagen character varying(200) COLLATE pg_catalog."default",
    numero integer NOT NULL,
    autor character varying(200) COLLATE pg_catalog."default" NOT NULL,
    activo boolean NOT NULL,
    usuario_creacion character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date,
    "updatedAt" date,
    CONSTRAINT fotografias_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.fotografias
    OWNER to postgres;
