package handler

import (
	"context"
	"encoding/json"
	"net/http"
	"time"

	"github.com/BHAV0207/backend/pkg/models"
	"go.mongodb.org/mongo-driver/mongo"
)

type ToDoHnadler struct {
	DB *mongo.Client
}

func (h *ToDoHnadler) CreateToDo(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var todo models.ToDo
	err := json.NewDecoder(r.Body).Decode(&todo)
	if err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	collection := h.DB.Database("tododb").Collection("todos")
	_, err = collection.InsertOne(ctx, todo)
	if err != nil {
		http.Error(w, "Failed to create todo", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(todo)

}
