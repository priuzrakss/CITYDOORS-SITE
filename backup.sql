PGDMP                         }         	   CityDoors    12.22    12.22 #    )           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            *           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            +           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ,           1262    16393 	   CityDoors    DATABASE     �   CREATE DATABASE "CityDoors" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Russian_Russia.1251' LC_CTYPE = 'Russian_Russia.1251';
    DROP DATABASE "CityDoors";
                postgres    false            �            1259    16414 
   categories    TABLE     f   CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL
);
    DROP TABLE public.categories;
       public         heap    postgres    false            �            1259    16412    categories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categories_id_seq;
       public          postgres    false    205            -           0    0    categories_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;
          public          postgres    false    204            �            1259    16435    objects    TABLE        CREATE TABLE public.objects (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    subcategory_id integer
);
    DROP TABLE public.objects;
       public         heap    postgres    false            �            1259    16433    objects_id_seq    SEQUENCE     �   CREATE SEQUENCE public.objects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.objects_id_seq;
       public          postgres    false    209            .           0    0    objects_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.objects_id_seq OWNED BY public.objects.id;
          public          postgres    false    208            �            1259    16422    subcategories    TABLE     �   CREATE TABLE public.subcategories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    category_id integer
);
 !   DROP TABLE public.subcategories;
       public         heap    postgres    false            �            1259    16420    subcategories_id_seq    SEQUENCE     �   CREATE SEQUENCE public.subcategories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.subcategories_id_seq;
       public          postgres    false    207            /           0    0    subcategories_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.subcategories_id_seq OWNED BY public.subcategories.id;
          public          postgres    false    206            �            1259    16404    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    role character varying(50) NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16402    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    203            0           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    202            �
           2604    16417    categories id    DEFAULT     n   ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);
 <   ALTER TABLE public.categories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    16438 
   objects id    DEFAULT     h   ALTER TABLE ONLY public.objects ALTER COLUMN id SET DEFAULT nextval('public.objects_id_seq'::regclass);
 9   ALTER TABLE public.objects ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �
           2604    16425    subcategories id    DEFAULT     t   ALTER TABLE ONLY public.subcategories ALTER COLUMN id SET DEFAULT nextval('public.subcategories_id_seq'::regclass);
 ?   ALTER TABLE public.subcategories ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16407    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            "          0    16414 
   categories 
   TABLE DATA           .   COPY public.categories (id, name) FROM stdin;
    public          postgres    false    205   p%       &          0    16435    objects 
   TABLE DATA           ;   COPY public.objects (id, name, subcategory_id) FROM stdin;
    public          postgres    false    209   �%       $          0    16422    subcategories 
   TABLE DATA           >   COPY public.subcategories (id, name, category_id) FROM stdin;
    public          postgres    false    207   �%                  0    16404    users 
   TABLE DATA           =   COPY public.users (id, username, password, role) FROM stdin;
    public          postgres    false    203   &       1           0    0    categories_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.categories_id_seq', 10, true);
          public          postgres    false    204            2           0    0    objects_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.objects_id_seq', 1, false);
          public          postgres    false    208            3           0    0    subcategories_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.subcategories_id_seq', 2, true);
          public          postgres    false    206            4           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 1, true);
          public          postgres    false    202            �
           2606    16419    categories categories_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categories DROP CONSTRAINT categories_pkey;
       public            postgres    false    205            �
           2606    16440    objects objects_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.objects
    ADD CONSTRAINT objects_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.objects DROP CONSTRAINT objects_pkey;
       public            postgres    false    209            �
           2606    16427     subcategories subcategories_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.subcategories
    ADD CONSTRAINT subcategories_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.subcategories DROP CONSTRAINT subcategories_pkey;
       public            postgres    false    207            �
           2606    16409    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            �
           2606    16411    users users_username_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_username_key;
       public            postgres    false    203            �
           2606    16441 #   objects objects_subcategory_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.objects
    ADD CONSTRAINT objects_subcategory_id_fkey FOREIGN KEY (subcategory_id) REFERENCES public.subcategories(id) ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.objects DROP CONSTRAINT objects_subcategory_id_fkey;
       public          postgres    false    209    2716    207            �
           2606    16428 ,   subcategories subcategories_category_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.subcategories
    ADD CONSTRAINT subcategories_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.subcategories DROP CONSTRAINT subcategories_category_id_fkey;
       public          postgres    false    205    207    2714            "   O   x���0�b�}�\�{���V cӅ�.��估���;.�cʙs^�sa�mv���M��b���� ��>�      &      x������ � �      $      x�3�t˩t��/*������� 09a          5   x�3�����H����,.M�q��LL����2�t��K���y��E\1z\\\ �;�     