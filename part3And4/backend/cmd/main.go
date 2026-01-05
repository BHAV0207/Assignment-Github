package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/BHAV0207/backend/internal/handler"
	"github.com/BHAV0207/backend/internal/repository"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
		return
	}

	URI := os.Getenv("MONGO_URI")
	fmt.Println("MongoDB URI:", URI)
	if URI == "" {
		panic("DB_URL not set in environment")
	}

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "8000"
	}

	client := repository.ConnectDB(URI)
	defer func() {
		if err := client.Disconnect(nil); err != nil {
			panic(err)
		}
	}()

	fmt.Println("Connected to MongoDB!")

	h := &handler.ToDoHnadler{
		DB: client,
	}

	router := mux.NewRouter()
	router.HandleFunc("/todo", h.CreateToDo).Methods("POST")

	if err := http.ListenAndServe(":"+PORT, router); err != nil {
		panic(err)
	}

}
