import { Recep } from "../model/recipies.js";
export class RecepService {
  Add = (recep) => {
    const repository = new Recep({
      category: recep.category,
      name: recep.name,
      ingredients: recep.ingredients,
      instructions: recep.instructions,
      // img: recep.img,
    });
    return repository.save();
  };

  update = async (id, item) => {
    const result = await Recep.findByIdAndUpdate({ _id: id }, item);
    if (result) return this.getOne(id);
    return null;
  };

  delete = async (id) => Recep.findByIdAndDelete({ _id: id });

  getOne = async (id) => Recep.findOne({ _id: id });

  getAll = async () => Recep.find({});
}
