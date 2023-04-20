
# Ten CGPA

An academic portal for scholars who wish to get high grades in their course of academic session which will help them for their future studies .




## Features

- Authentication
- Create , Read , Update , Delete of Notes and Testpapers
- Customize Notes with editor 
- Like, Save , Comment ( for discussion ) , share with specific people of notes and testpapers
- Sorting and filtering on the basis of likes , comments , username, College 


## Screenshots 

### Landing page

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681975966/Projects/L1_pinvn1.png) 

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681976071/Projects/L2_yxxlar.png) 

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681975978/Projects/L3_azvo6c.png) 

### Authentication page

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681975969/Projects/Au1_e7ldnk.png) 

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681976021/Projects/L4_wgif36.png) 

### All-Notes page

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681975956/Projects/allNotes_ce9chl.png) 

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681976002/Projects/L5_ktn7ua.png) 

### Create-Notes page

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681976031/Projects/N1_j3onsi.png) 

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681975941/Projects/N2_g4slbn.png) 

### Profile page

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681975892/Projects/L7_scbzvo.png) 

### View Notes 

![App Screenshot](https://res.cloudinary.com/vinsmokecyrus/image/upload/v1681976024/Projects/notesExample1_djr5c2.png)

## API Reference

#### Get all Notes

```http
  GET /api/notes
```


#### Get a note

```http
  GET /api/notes/${id}
```

#### Create a note

```http
  POST /api/notes/
```
#### Delete a note

```http
  GET /api/notes/${id}/${userID}
```
#### Like a note

```http
  POST /api/notes/like/${id}
```

#### Save a note

```http
  POST /api/notes/save/${id}
```
#### Comment a note

```http
  POST /api/notes/comment/${id}/
