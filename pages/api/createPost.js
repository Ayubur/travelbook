import { postRepo } from "../../helpers/post-repo";

export default function(req, res){
    let payload = JSON.parse(req.body);
    postRepo.create(payload);

    res.status(200).json({success:true});
}