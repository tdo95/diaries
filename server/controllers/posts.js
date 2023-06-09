import express from 'express'
import mongoose from 'mongoose'

import PostMessage from '../models/PostMessage.js'
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        console.log(error)
        res.status(404).json({message: error.message})
    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
        res.status(409).json({message: error.message})
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const post = req.body
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that ID.')
    
    try {
        //new option allows returns updated post
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
        console.log(updatedPost)

        res.status(200).json(updatedPost)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: error.message })
    }

} 

export const deletePost = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID.')

    try {
        await PostMessage.findByIdAndRemove(id)
        res.status(200).json({message: 'Post deleted successfully.'})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that ID.')
    if (!req.userId) return res.status(400).json('User not authenticated')
    try {
        const post = await PostMessage.findById(id)

        const index = post.likes.findIndex((id) => id === String(req.userId))

        if (index === -1) {
            //add like
            post.likes.push(req.userId)
        } else {
            //remove like
            post.likes = post.likes.filter(id => id !== req.userId )
        }

        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true})
        res.status(200).json(updatedPost)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}