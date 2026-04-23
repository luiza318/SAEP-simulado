-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eco_move
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema eco_move
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eco_move` DEFAULT CHARACTER SET utf8 ;
USE `eco_move` ;

-- -----------------------------------------------------
-- Table `eco_move`.`tb_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eco_move`.`tb_usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(245) NOT NULL,
  `email` VARCHAR(245) NOT NULL,
  `senha` VARCHAR(245) NOT NULL,
  `foto_url` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eco_move`.`tb_atividade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eco_move`.`tb_atividade` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `tipo` VARCHAR(245) NOT NULL,
  `distancia_metros` DECIMAL(5,2) NOT NULL,
  `duracao_minutos` INT NOT NULL,
  `co2_kg` DECIMAL(5,2) NOT NULL,
  `data_iso` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tb_atividade_tb_usuario_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_tb_atividade_tb_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `eco_move`.`tb_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eco_move`.`tb_curtida`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eco_move`.`tb_curtida` (
  `id_usuario` INT NOT NULL,
  `id_atividade` INT NOT NULL,
  INDEX `fk_tb_curtida_tb_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_tb_curtida_tb_atividade_idx` (`id_atividade` ASC) VISIBLE,
  CONSTRAINT `fk_tb_curtida_tb_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `eco_move`.`tb_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_curtida_tb_atividade`
    FOREIGN KEY (`id_atividade`)
    REFERENCES `eco_move`.`tb_atividade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `eco_move`.`tb_comentario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `eco_move`.`tb_comentario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_usuario` INT NOT NULL,
  `id_atividade` INT NOT NULL,
  `comentario` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tb_comentario_tb_usuario_idx` (`id_usuario` ASC) VISIBLE,
  INDEX `fk_tb_comentario_tb_atividade_idx` (`id_atividade` ASC) VISIBLE,
  CONSTRAINT `fk_tb_comentario_tb_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `eco_move`.`tb_usuario` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_comentario_tb_atividade`
    FOREIGN KEY (`id_atividade`)
    REFERENCES `eco_move`.`tb_atividade` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
