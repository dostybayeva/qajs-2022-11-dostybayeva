import {config} from "../config.js";
import axios from "axios";

export const bookStore = {
    async createBook(userId, token, isbn) {
        const req = {
            method: "post",
            url: `${config.baseUrl}/BookStore/v1/Books`,
            data: {
                "userId": userId,
                "collectionOfIsbns": [
                    {
                        "isbn": isbn
                    }
                ]
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        return axios(req);
    },
    async updateBook(userId, isbn, newIsbn, token) {
        const req = {
            method: "put",
            url: `${config.baseUrl}/BookStore/v1/Books/${isbn}`,
            data: {
                "userId": userId,
                "isbn": newIsbn
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        return axios(req);
    },
    async getBook(isbn) {
        const req = {
            method: "get",
            url: `${config.baseUrl}/BookStore/v1/Book`,
            params: {
                'ISBN': isbn
            }
        }
        return axios(req);
    },
    async deleteBook(userId, isbn, token) {
        const req = {
            method: "delete",
            url: `${config.baseUrl}/BookStore/v1/Book`,
            data: {
                "isbn": isbn,
                "userId": userId
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        return axios(req);
    }
}
