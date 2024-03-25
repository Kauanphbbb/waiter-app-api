import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategory(req: Request, res: Response) {
  try {
    console.log('listProductsByCategory');
    const { categoryId } = req.params;

    const products = await Product.find().where('category', categoryId);

    res.json({ products });
  } catch (error) {
    console.error(error);

    res.sendStatus(500);
  }
}
