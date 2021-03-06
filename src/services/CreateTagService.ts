
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class CreateTagService{
    async execute(name : string){

        if(!name){
            throw new Error("Incorrect name ! ")
        }

        const tagsRepositories = getCustomRepository(TagsRepositories)

        const tagAlreadyExists = await tagsRepositories.findOne({
            name
        })

        if(tagAlreadyExists){
            throw new Error(`Tag ${name} already exist`)
        }

        const tag = tagsRepositories.create({
            name
        })

        await tagsRepositories.save(tag)

        return tag

    }
}

export { CreateTagService }