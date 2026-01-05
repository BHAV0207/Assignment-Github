package models

type ToDo struct{
	Name string `json:"name" bsom:"name"`
	Description string `json:"description" bson:"description"`
}