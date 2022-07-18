import { postRepo } from "../../helpers/post-repo";

export default function (req, res) {
    let posts = postRepo.getAll();
    res.status(200).json(posts);
}