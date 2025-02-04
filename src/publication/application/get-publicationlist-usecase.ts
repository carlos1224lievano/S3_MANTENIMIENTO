import { Publication } from '../domain/publication';
import {PublicationRepository} from '../domain/ports/publication-repository';

class GetPublicationListUseCase {
  constructor(private publicationRepository: PublicationRepository) {}

  async execute(): Promise<Publication[]> {
    return this.publicationRepository.getAll();
  }
}

export default GetPublicationListUseCase;
