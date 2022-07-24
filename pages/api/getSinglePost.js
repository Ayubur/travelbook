import { postRepo } from "../../helpers/post-repo";

export default function (req, res){
    const {id} = req.query;
    let post = postRepo.getById(id);
    res.status(200).json(post);
}